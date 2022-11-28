import { SpeakeasyBase } from "../../../internal/utils";
import { CellLocation } from "./celllocation";
import { EntityObject } from "./entityobject";
/**
 * Contains additional attributes related to the task parameter. If the task parameter is table, the row and column IDs for the detected text are returned. If the task parameter is contact, the detected entity tags will be returned.
**/
export declare class Attributes extends SpeakeasyBase {
    cellLocation?: CellLocation;
    language?: string;
    pageNumber?: string;
    tag?: string;
    value?: EntityObject;
}
