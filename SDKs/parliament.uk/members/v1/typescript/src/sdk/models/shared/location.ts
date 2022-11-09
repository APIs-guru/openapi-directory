import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LocationContext } from "./locationcontext";
import { LocationContext } from "./locationcontext";
import { LocationContext } from "./locationcontext";
import { PartySeatCount } from "./partyseatcount";


export class Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=childContexts", elemType: shared.LocationContext })
  childContexts?: LocationContext[];

  @Metadata({ data: "json, name=context" })
  context?: LocationContext;

  @Metadata({ data: "json, name=parentContext" })
  parentContext?: LocationContext;

  @Metadata({ data: "json, name=stateOfTheParties", elemType: shared.PartySeatCount })
  stateOfTheParties?: PartySeatCount[];
}
