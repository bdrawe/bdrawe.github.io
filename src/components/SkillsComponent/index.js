import React from "react";
import Skills  from "../../data/skills.js"

class SkillsComponent extends React.Component {
    render() {
        return (
            <div>
                {Skills.map((skill) => {
                    return(
                    <div>
                        <img
                            src={skill.image} 
                            alt={skill.altTag}
                            width="70"
                        />
                    </div>
                    )
                })}
            </div>
        )
    }
}
export default SkillsComponent;