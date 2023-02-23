import React, { useState } from 'react'
import useCollapse from 'react-collapsed';

function Feedback() {
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

    return (
        <div>
            <button
                {...getToggleProps({
                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}
            >
                {'Feedback'}
            </button>
            <section {...getCollapseProps()} >The site is good.</section>
        </div>
    )

}

export default Feedback;