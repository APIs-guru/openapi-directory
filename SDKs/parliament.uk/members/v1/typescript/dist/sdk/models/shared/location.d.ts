import { SpeakeasyBase } from "../../../internal/utils";
import { LocationContext } from "./locationcontext";
import { PartySeatCount } from "./partyseatcount";
export declare class Location extends SpeakeasyBase {
    childContexts?: LocationContext[];
    context?: LocationContext;
    parentContext?: LocationContext;
    stateOfTheParties?: PartySeatCount[];
}
