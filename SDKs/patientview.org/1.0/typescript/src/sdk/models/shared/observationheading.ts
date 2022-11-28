import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObservationHeadingGroup } from "./observationheadinggroup";



export class ObservationHeading extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=decimalPlaces" })
  decimalPlaces?: number;

  @SpeakeasyMetadata({ data: "json, name=defaultPanel" })
  defaultPanel?: number;

  @SpeakeasyMetadata({ data: "json, name=defaultPanelOrder" })
  defaultPanelOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=heading" })
  heading?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=infoLink" })
  infoLink?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;

  @SpeakeasyMetadata({ data: "json, name=maxGraph" })
  maxGraph?: number;

  @SpeakeasyMetadata({ data: "json, name=minGraph" })
  minGraph?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=normalRange" })
  normalRange?: string;

  @SpeakeasyMetadata({ data: "json, name=observationHeadingGroups", elemType: ObservationHeadingGroup })
  observationHeadingGroups?: ObservationHeadingGroup[];

  @SpeakeasyMetadata({ data: "json, name=units" })
  units?: string;
}
