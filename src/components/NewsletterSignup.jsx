import { useId } from "react";

export default function NewsletterSignup() {
    const inputId = useId();

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <section className="newsletter-signup" id="newsletter" aria-labelledby="newsletter-title">
            <div className="newsletter-signup__copy">
                <p className="meta-kicker">
                    <span className="meta-kicker__tone">Newsletter</span>
                    <span>Monthly dispatch</span>
                </p>
                <h2 id="newsletter-title" className="newsletter-signup__title">
                    Receive new stories, reviews, and event notices.
                </h2>
                <p className="newsletter-signup__summary">
                    A compact monthly brief on new publications, open reviews, and public programs.
                </p>
            </div>
            <form className="newsletter-signup__form" onSubmit={handleSubmit}>
                <label htmlFor={inputId} className="newsletter-signup__label">
                    Email address
                </label>
                <input
                    id={inputId}
                    type="email"
                    className="newsletter-signup__input"
                    placeholder="name@institution.edu"
                />
                <button type="submit" className="newsletter-signup__button">
                    Subscribe
                </button>
            </form>
        </section>
    );
}
