import PropTypes from 'prop-types'

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
{
    const { good, neutral, bad } = options;
    return (
    
    <div>
            <button
                type="button"
                onClick={onLeaveFeedback}
                name="good"
                data-value={good}
            >
                Good
            </button>

            <button
                
                type="button"
                onClick={onLeaveFeedback}
                name="neutral"
                data-value={neutral}
            >
                Neutral
            </button>

            <button
                
                type="button"
                onClick={onLeaveFeedback}
                name="bad"
                data-value={bad}
            >
                Bad
            </button>
    </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
    }).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;