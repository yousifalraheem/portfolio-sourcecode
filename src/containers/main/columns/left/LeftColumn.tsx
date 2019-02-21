import React from "react";
import ResumeEntry, { ResumeEntryItem } from "../../../../components/ResumeEntry";

const listOfExperiences: Array<ResumeEntryItem> = require("../../../../assets/data/listOfExperiences.json");
const listOfEducation: Array<ResumeEntryItem> = require("../../../../assets/data/listOfEducation.json");
const listOfInterests: Array<string> = require("../../../../assets/data/listOfInterests.json");
const listOfCauses: Array<string> = require("../../../../assets/data/listOfCauses.json");

const LeftColumn: React.FunctionComponent = () => (
    <div className="left-column">
        <section>
            <header>Experience</header>
            {listOfExperiences &&
                listOfExperiences.map((item: ResumeEntryItem, i: number) => <ResumeEntry {...item} key={i} />)}
        </section>

        <section>
            <header>Education</header>
            {listOfEducation &&
                listOfEducation.map((item: ResumeEntryItem, i: number) => (
                    <ResumeEntry className="condensed" {...item} key={i} />
                ))}
        </section>

        <section>
            <header>Interest</header>
            {listOfInterests && <ResumeEntry descriptionList={listOfInterests} />}
        </section>

        <section>
            <header>Causes I Care About</header>
            {listOfCauses && <ResumeEntry descriptionList={listOfCauses} />}
        </section>
    </div>
);

export default LeftColumn;
