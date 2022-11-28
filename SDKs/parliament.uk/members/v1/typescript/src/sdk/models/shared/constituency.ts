import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConstituencyRepresentation } from "./constituencyrepresentation";



export class Constituency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentRepresentation" })
  currentRepresentation?: ConstituencyRepresentation;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;
}
