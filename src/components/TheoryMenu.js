import CustomSidebar from "./CustomSidebar";

const topics = [
    { href: "/article", text: "Article", icon: "fas fa-tachometer-alt me-4" },
    { href: "/modalVerbs", text: "Modal Verbs", icon: "fas fa-chart-area me-4" },
    { href: "/passiveVoice", text: "Passive Voice", icon: "fas fa-chart-line me-4" },
    { href: "/presentForm", text: "Present Forms", icon: "fas fa-chart-pie me-4" },
    { href: "/pastForm", text: "Past Forms", icon: "fas fa-chart-bar me-4" },
    { href: "/futureForm", text: "Future Forms", icon: "fas fa-globe me-4" },
];
const TheoryMenu = () =>{
    return(
        <div>
            <CustomSidebar topics={topics} />
        </div>
    )
}

export default TheoryMenu;