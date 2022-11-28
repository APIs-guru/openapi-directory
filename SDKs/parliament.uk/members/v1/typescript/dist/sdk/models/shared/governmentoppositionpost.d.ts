import { SpeakeasyBase } from "../../../internal/utils";
import { GovernmentDepartment } from "./governmentdepartment";
import { GovernmentOppositionPostHolder } from "./governmentoppositionpostholder";
export declare class GovernmentOppositionPost extends SpeakeasyBase {
    createdWhen?: Date;
    governmentDepartments?: GovernmentDepartment[];
    hansardName?: string;
    id?: number;
    name?: string;
    order?: number;
    postHolders?: GovernmentOppositionPostHolder[];
    type?: number;
}
