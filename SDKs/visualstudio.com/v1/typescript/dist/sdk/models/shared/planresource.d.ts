import { SpeakeasyBase } from "../../../internal/utils";
import { PlanResourceIdentity } from "./planresourceidentity";
import { PlanResourceProperties } from "./planresourceproperties";
export declare class PlanResource extends SpeakeasyBase {
    id?: string;
    identity?: PlanResourceIdentity;
    location?: string;
    name?: string;
    properties?: PlanResourceProperties;
    provisioningState?: string;
    tags?: Map<string, string>;
    type?: string;
}
