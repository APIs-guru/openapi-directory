import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObservationHeadingGroup } from "./observationheadinggroup";


export class ObservationHeading extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=decimalPlaces" })
  decimalPlaces?: number;

  @Metadata({ data: "json, name=defaultPanel" })
  defaultPanel?: number;

  @Metadata({ data: "json, name=defaultPanelOrder" })
  defaultPanelOrder?: number;

  @Metadata({ data: "json, name=heading" })
  heading?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=infoLink" })
  infoLink?: string;

  @Metadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;

  @Metadata({ data: "json, name=maxGraph" })
  maxGraph?: number;

  @Metadata({ data: "json, name=minGraph" })
  minGraph?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=normalRange" })
  normalRange?: string;

  @Metadata({ data: "json, name=observationHeadingGroups", elemType: shared.ObservationHeadingGroup })
  observationHeadingGroups?: ObservationHeadingGroup[];

  @Metadata({ data: "json, name=units" })
  units?: string;
}
