//import PropTipes from 'prop-types'
import './Feedback.css'
import React, { Component } from 'react'
import Statistics from '../Statistic'
import Notification from '../Notification'
import FeedbackOptions from '../FeedbackOptions'
import Section from '../Section'


class Feedback extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positive: 0,
        visibility: false,
    }
    
    onLeaveFeedback = (event) => {
        const {name} = event.target;
        
        this.setState((prevState)=> ({
            [name] : prevState[name] +1,
        }))
        this.countTotalFeedback();
    }
    countTotalFeedback = () => {
        this.setState(prevState => ({
            total: prevState.total + 1,
            visibility: true,
        }))

    }
    
  
    render() {
        const positive = this.state.good / this.state.total * 100;
        const arrayMarks = ['good', 'neutral','bad'];
        return <div className="btn-field">
            <Section title="Please leave feedback">
            <FeedbackOptions options={arrayMarks } onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
            
            {this.state.visibility &&
                <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.state.total} positivePercentage={positive} />
                }
                
            {!this.state.visibility&& <Notification message="No feedback given"/>}
            </Section>
            
        </div>
    }
}
export default Feedback;
