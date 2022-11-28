import { SpeakeasyBase } from "../../../internal/utils";
import { LookupType } from "./lookuptype";
export declare class Lookup extends SpeakeasyBase {
    created?: Date;
    description?: string;
    descriptionFriendly?: string;
    displayOrder?: number;
    id?: number;
    lastUpdate?: Date;
    lookupType?: LookupType;
    value?: string;
}
