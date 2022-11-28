import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdatedBy extends SpeakeasyBase {
    firstName?: string;
    id?: string;
    lastName?: string;
}
export declare class Updated extends SpeakeasyBase {
    at?: Date;
    by?: UpdatedBy;
}
