import { SpeakeasyBase } from "../../../internal/utils";
import { ContactPointType } from "./contactpointtype";
export declare class ContactPoint extends SpeakeasyBase {
    contactPointType?: ContactPointType;
    content?: string;
    created?: Date;
    id?: number;
    lastUpdate?: Date;
}
