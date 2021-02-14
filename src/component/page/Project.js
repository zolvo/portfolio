import React from 'react'
import styled from 'styled-components';

function Project() {
    return (
        <Container>
            <div className='project_title'>
            Project List
<div className='project_list'></div>
            </div>
        </Container>
    )
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;

.project_title {
height: 5em;
text-transform: uppercase;
font-size: 20px;
font-weight: bold;
letter-spacing: 2px;
}
`

export default Project
