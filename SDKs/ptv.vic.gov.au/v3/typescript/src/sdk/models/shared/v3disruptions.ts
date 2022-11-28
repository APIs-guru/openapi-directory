import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V3Disruption } from "./v3disruption";



export class V3Disruptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ferry", elemType: V3Disruption })
  ferry?: V3Disruption[];

  @SpeakeasyMetadata({ data: "json, name=general", elemType: V3Disruption })
  general?: V3Disruption[];

  @SpeakeasyMetadata({ data: "json, name=interstate_train", elemType: V3Disruption })
  interstateTrain?: V3Disruption[];

  @SpeakeasyMetadata({ data: "json, name=metro_bus", elemType: V3Disruption })
  metroBus?: V3Disruption[];

  @SpeakeasyMetadata({ data: "json, name=metro_train", elemType: V3Disruption })
  metroTrain?: V3Disruption[];

  @SpeakeasyMetadata({ data: "json, name=metro_tram", elemType: V3Disruption })
  metroTram?: V3Disruption[];

  @SpeakeasyMetadata({ data: "json, name=night_bus", elemType: V3Disruption })
  nightBus?: V3Disruption[];

  @SpeakeasyMetadata({ data: "json, name=regional_bus", elemType: V3Disruption })
  regionalBus?: V3Disruption[];

  @SpeakeasyMetadata({ data: "json, name=regional_coach", elemType: V3Disruption })
  regionalCoach?: V3Disruption[];

  @SpeakeasyMetadata({ data: "json, name=regional_train", elemType: V3Disruption })
  regionalTrain?: V3Disruption[];

  @SpeakeasyMetadata({ data: "json, name=school_bus", elemType: V3Disruption })
  schoolBus?: V3Disruption[];

  @SpeakeasyMetadata({ data: "json, name=skybus", elemType: V3Disruption })
  skybus?: V3Disruption[];

  @SpeakeasyMetadata({ data: "json, name=taxi", elemType: V3Disruption })
  taxi?: V3Disruption[];

  @SpeakeasyMetadata({ data: "json, name=telebus", elemType: V3Disruption })
  telebus?: V3Disruption[];
}
