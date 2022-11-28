import { SpeakeasyBase } from "../../../internal/utils";
import { Level } from "./level";
import { Segment } from "./segment";
/**
 * Classification
**/
export declare class Classification extends SpeakeasyBase {
    genre?: Level;
    primary?: boolean;
    segment?: Segment;
    subGenre?: Level;
    subType?: Level;
    type?: Level;
}
