import CustomSidebar from "./CustomSidebar";

const topics = [
    { href: "/articleQuiz", text: "Article", icon: "fas fa-tachometer-alt me-4" },
    { href: "/modalVerbsQuiz", text: "Modal Verbs", icon: "fas fa-chart-area me-4" },
    { href: "/passiveVoiceQuiz", text: "Passive Voice", icon: "fas fa-chart-line me-4" },
    { href: "/simpleFormQuiz", text: "Present Forms", icon: "fas fa-chart-pie me-4" },
    { href: "/pastFormQuiz", text: "Past Forms", icon: "fas fa-chart-bar me-4" },
    { href: "/futureQuiz", text: "Future Forms", icon: "fas fa-globe me-4" },
];

const QuizMenu = () =>{
    return(
        <div>
            <CustomSidebar topics={topics} />
        </div>
    )
}

export default QuizMenu