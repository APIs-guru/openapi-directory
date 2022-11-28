import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocationContext } from "./locationcontext";
import { PartySeatCount } from "./partyseatcount";



export class Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childContexts", elemType: LocationContext })
  childContexts?: LocationContext[];

  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: LocationContext;

  @SpeakeasyMetadata({ data: "json, name=parentContext" })
  parentContext?: LocationContext;

  @SpeakeasyMetadata({ data: "json, name=stateOfTheParties", elemType: PartySeatCount })
  stateOfTheParties?: PartySeatCount[];
}
