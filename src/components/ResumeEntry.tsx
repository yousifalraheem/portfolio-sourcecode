import React from "react";

const briefcaseIcon: string = require("../assets/svgs/briefcase.svg");
const pinIcon: string = require("../assets/svgs/pin.svg");
const calendarIcon: string = require("../assets/svgs/calendar.svg");
const statsIcon: string = require("../assets/svgs/stats.svg");
const schoolIcon: string = require("../assets/svgs/school.svg");

export interface DetailedListItem {
    title: string;
    data: string;
}

export interface ResumeEntryItem {
    title?: string;
    subtitle?: string;
    company?: string;
    university?: string;
    dateFrom?: Date | string;
    dateTo?: Date | string;
    location?: string;
    score?: string;
    description?: string;
    descriptionList?: Array<string>;
    detailedList?: Array<DetailedListItem>;
    className?: string;
}

const ResumeEntry: React.FunctionComponent<ResumeEntryItem> = (props: ResumeEntryItem) => (
    <div className={"resume-entry-container" + (props.className ? ` ${props.className}` : "")}>
        {props.title && <h1>{props.title}</h1>}
        {props.subtitle && <h2>{props.subtitle}</h2>}
        {props.company || props.university || (props.dateFrom && props.dateTo) || props.location || props.score ? (
            <dl>
                {props.company && <dt>{<img src={briefcaseIcon} alt="briefcase" />}</dt>}
                {props.company && <dd>{props.company}</dd>}

                {props.university && <dt>{<img src={schoolIcon} alt="school" />}</dt>}
                {props.university && <dd>{props.university}</dd>}

                {props.dateFrom && props.dateTo ? <dt>{<img src={calendarIcon} alt="calendar" />}</dt> : null}
                {props.dateFrom && props.dateTo ? (
                    <dd>
                        {props.dateFrom} - {props.dateTo}
                    </dd>
                ) : null}

                {props.location && <dt>{<img src={pinIcon} alt="pin" />}</dt>}
                {props.location && <dd>{props.location}</dd>}

                {props.score && <dt>{<img src={statsIcon} alt="stats" />}</dt>}
                {props.score && <dd>Score: {props.score}</dd>}
            </dl>
        ) : null}

        {props.detailedList && props.detailedList.length ? (
            <dl>
                {props.detailedList.map((item: DetailedListItem, i: number) => (
                    <React.Fragment key={i}>
                        <dt>{item.title}:</dt>
                        <dd>{item.data}</dd>
                    </React.Fragment>
                ))}
            </dl>
        ) : null}

        {props.description && <p>{props.description}</p>}

        <ul className="description">
            {props.descriptionList && props.descriptionList.map((item: string, i: number) => <li key={i}>{item}</li>)}
        </ul>
    </div>
);

export default ResumeEntry;
