import { SpeakeasyBase } from "../../../internal/utils";
import { ObservationHeadingGroup } from "./observationheadinggroup";
export declare class ObservationHeading extends SpeakeasyBase {
    code?: string;
    created?: Date;
    decimalPlaces?: number;
    defaultPanel?: number;
    defaultPanelOrder?: number;
    heading?: string;
    id?: number;
    infoLink?: string;
    lastUpdate?: Date;
    maxGraph?: number;
    minGraph?: number;
    name?: string;
    normalRange?: string;
    observationHeadingGroups?: ObservationHeadingGroup[];
    units?: string;
}
