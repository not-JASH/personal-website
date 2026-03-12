$ErrorActionPreference = "Stop"

$startMenuPath = Join-Path $env:APPDATA "Microsoft\Windows\Start Menu\Programs\Discord Inc"
$localDiscordPath = Join-Path $env:LOCALAPPDATA "Discord"
$removed = New-Object System.Collections.Generic.List[string]

function Remove-IfExists {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Path
    )

    if (Test-Path -LiteralPath $Path) {
        Remove-Item -LiteralPath $Path -Recurse -Force
        $removed.Add($Path)
    }
}

Write-Host "Checking for orphaned Discord remnants..."

Remove-IfExists -Path $startMenuPath
Remove-IfExists -Path $localDiscordPath

$discordStartApp = Get-StartApps | Where-Object { $_.Name -eq "Discord" }
if ($discordStartApp) {
    Get-Process StartMenuExperienceHost -ErrorAction SilentlyContinue | Stop-Process -Force
    Start-Sleep -Seconds 2
    $discordStartApp = Get-StartApps | Where-Object { $_.Name -eq "Discord" }
}

Write-Host ""
if ($removed.Count -gt 0) {
    Write-Host "Removed:"
    foreach ($path in $removed) {
        Write-Host " - $path"
    }
} else {
    Write-Host "No Discord remnants were found in the expected Start Menu and LocalAppData locations."
}

if ($discordStartApp) {
    Write-Warning "Discord still appears in Start. Sign out and back in, or reboot, to flush the remaining cache."
} else {
    Write-Host "Discord no longer appears in Get-StartApps."
}
