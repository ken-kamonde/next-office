import React, { useState } from 'react';


const NewProposalForm = (props) => {
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [propertyManager, setPropertyManager] = useState("");
    const [propertyManagementCom, setPropertyManagementCom] = useState("");
    const [designer, setDesigner] = useState("");
    const [designerCom, setDesignerCom] = useState("");
    const [proposalAmountVerbiage, setProposalAmountVerbiage] = useState("");
    const [totalProposalAmount, setTotalProposalAmount] = useState("");
    const [name, setName] =useState("");
    const [title, setTitle] = useState ("")

    function handleSubmit(event) {
        event.preventDefault();
        let priceProposal = {
            location: location,
            date: date,
            propertyManager: propertyManager,
            propertyManagementCom: propertyManagementCom,
            designer: designer,
            designerCom: designerCom,
            proposalAmountVerbiage: proposalAmountVerbiage,
            totalProposalAmount: totalProposalAmount,
            name: name,
            title: title,


        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Proposal</label>
            <label>Location</label> <input type= 'text' value={location} onChange={(event) => setLocation(event.target.value)} />
            <label>Date</label>  <input type= 'date' value={date} onChange={(event) => setDate(event.target.value)}/>
            <label>Attention:</label>  <label> Property Manager</label>  <input type= 'text'value={propertyManager} onChange={(event) => setPropertyManager(event.target.value)}/>
            <label>Property Management Company</label>  <input  type='text'value={propertyManagementCom} onChange={(event) => setPropertyManagementCom(event.target.value)}/>
            
            <label>From:</label>  <label>Designer</label> <input type= 'text'value={designer} onChange={(event) => setDesigner(event.target.value)}/>
            <label>Designer Company Name</label>  <input type='text'value={designerCom} onChange={(event) => setDesignerCom(event.target.value)}/>
            <p>The undersigned, having carefully examined the Contract Documents and all the data made available, and having become familiar with the local conditions affecting the cost of the work, hereby proposes to furnish all design criteria for the Total Proposal Sum of:</p>
            <input type= 'text'value={proposalAmountVerbiage} onChange={(event) => setProposalAmountVerbiage(event.target.value)}/> 

            <label>Total Proposal Amount</label>  <input type= 'number' value={totalProposalAmount} onChange={(event) => setTotalProposalAmount(event.target.value)} />

            <p>Person responsible for filling out this bid proposal form:</p>
            <label>Name:</label> <input type= 'text'value={name} onChange={(event) => setName(event.target.value)}/>
            <label>Title:</label> <input type='text'value={title} onChange={(event) => setTitle(event.target.value)} />

            <button type= 'submit'>Submit Proposal</button>
        </form>
     );
}
 
export default NewProposalForm;