import { IconDefinition, config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

config.autoAddCss = false
import styles from "./sidebar.module.css"

interface SBOption{
    icon: IconDefinition
    text: string
}

interface SidebarProps {
    options: SBOption[]
    selected: string
    setSelected: React.Dispatch<React.SetStateAction<string>>
}


export default function SideBar({options, selected, setSelected}:SidebarProps) {
    return (
        <div className={styles['sidebar']}>
            <ul className={styles['options']}>
                {options.map((v, i) => {
                    return (
                            <li key={i} onClick={() => setSelected(v.text)} style={selected == v.text? {backgroundColor: "#E31C25"}: undefined}>
                                <FontAwesomeIcon icon={v.icon}/>
                                <span>{v.text}</span>
                            </li>
                    )
                    })
                }

            </ul>
            <div className={styles['latest']}>
                <h2 className={styles['latest-title']}>Latest Activities</h2>
                <ul className={styles['activities']}>
                    <li >
                        <span>User</span> added <span>movie</span> to watch later - March 18 2022
                    </li> 
                    <li >
                        <span>User</span> added <span>movie</span> to watch later - March 18 2022
                    </li>
                </ul>
            </div>
        </div>
    )
}