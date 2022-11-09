import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { V3Disruption } from "./v3disruption";
import { V3Disruption } from "./v3disruption";
import { V3Disruption } from "./v3disruption";
import { V3Disruption } from "./v3disruption";
import { V3Disruption } from "./v3disruption";
import { V3Disruption } from "./v3disruption";
import { V3Disruption } from "./v3disruption";
import { V3Disruption } from "./v3disruption";
import { V3Disruption } from "./v3disruption";
import { V3Disruption } from "./v3disruption";
import { V3Disruption } from "./v3disruption";
import { V3Disruption } from "./v3disruption";
import { V3Disruption } from "./v3disruption";
import { V3Disruption } from "./v3disruption";


export class V3Disruptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=ferry", elemType: shared.V3Disruption })
  ferry?: V3Disruption[];

  @Metadata({ data: "json, name=general", elemType: shared.V3Disruption })
  general?: V3Disruption[];

  @Metadata({ data: "json, name=interstate_train", elemType: shared.V3Disruption })
  interstateTrain?: V3Disruption[];

  @Metadata({ data: "json, name=metro_bus", elemType: shared.V3Disruption })
  metroBus?: V3Disruption[];

  @Metadata({ data: "json, name=metro_train", elemType: shared.V3Disruption })
  metroTrain?: V3Disruption[];

  @Metadata({ data: "json, name=metro_tram", elemType: shared.V3Disruption })
  metroTram?: V3Disruption[];

  @Metadata({ data: "json, name=night_bus", elemType: shared.V3Disruption })
  nightBus?: V3Disruption[];

  @Metadata({ data: "json, name=regional_bus", elemType: shared.V3Disruption })
  regionalBus?: V3Disruption[];

  @Metadata({ data: "json, name=regional_coach", elemType: shared.V3Disruption })
  regionalCoach?: V3Disruption[];

  @Metadata({ data: "json, name=regional_train", elemType: shared.V3Disruption })
  regionalTrain?: V3Disruption[];

  @Metadata({ data: "json, name=school_bus", elemType: shared.V3Disruption })
  schoolBus?: V3Disruption[];

  @Metadata({ data: "json, name=skybus", elemType: shared.V3Disruption })
  skybus?: V3Disruption[];

  @Metadata({ data: "json, name=taxi", elemType: shared.V3Disruption })
  taxi?: V3Disruption[];

  @Metadata({ data: "json, name=telebus", elemType: shared.V3Disruption })
  telebus?: V3Disruption[];
}
