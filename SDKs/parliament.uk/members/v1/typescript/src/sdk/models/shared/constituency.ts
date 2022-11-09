import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConstituencyRepresentation } from "./constituencyrepresentation";


export class Constituency extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentRepresentation" })
  currentRepresentation?: ConstituencyRepresentation;

  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;
}
