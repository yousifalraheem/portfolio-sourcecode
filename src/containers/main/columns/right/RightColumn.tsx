import React from "react";
import ResumeEntry, { ResumeEntryItem, DetailedListItem } from "../../../../components/ResumeEntry";

const summary: string = require("../../../../assets/data/summary.json");
const contactDetails: Array<ResumeEntryItem> = require("../../../../assets/data/contactDetails.json");
const personalDetails: Array<DetailedListItem> = require("../../../../assets/data/personalDetails.json");
const listOfSkills: Array<ResumeEntryItem> = require("../../../../assets/data/listOfSkills.json");
const listOfTrails: Array<string> = require("../../../../assets/data/listOfTraits.json");
const listOfLanguages: Array<string> = require("../../../../assets/data/listOfLanguages.json");
const listOfInterests: Array<string> = require("../../../../assets/data/listOfInterests.json");
const listOfCauses: Array<string> = require("../../../../assets/data/listOfCauses.json");

const RightColumn: React.FunctionComponent = () => (
    <div className="right-column">
        <section>
            <header>Summary</header>
            {summary && <ResumeEntry description={summary} />}
        </section>

        <section>
            <header>Contact</header>
            {contactDetails &&
                contactDetails.map((item: ResumeEntryItem, i: number) => (
                    <ResumeEntry {...item} key={i} className="condensed" />
                ))}
        </section>

        <section>
            <header>Personal</header>
            {personalDetails && <ResumeEntry detailedList={personalDetails} />}
        </section>

        <section>
            <header>Languages</header>
            {listOfLanguages && <ResumeEntry className="condensed-list" descriptionList={listOfLanguages} />}
        </section>

        <section>
            <header>Skills</header>
            {listOfSkills &&
                listOfSkills.map((item: ResumeEntryItem, i: number) => (
                    <ResumeEntry className="condensed" {...item} key={i} />
                ))}
        </section>

        <section>
            <header>Traits</header>
            {listOfTrails && <ResumeEntry descriptionList={listOfTrails} />}
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

export default RightColumn;
