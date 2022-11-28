import { SpeakeasyBase } from "../../../internal/utils";
import { PlanResourceIdentity } from "./planresourceidentity";
import { PlanResourceProperties } from "./planresourceproperties";
export declare class PlanResourceUpdateBody extends SpeakeasyBase {
    identity?: PlanResourceIdentity;
    properties?: PlanResourceProperties;
}
