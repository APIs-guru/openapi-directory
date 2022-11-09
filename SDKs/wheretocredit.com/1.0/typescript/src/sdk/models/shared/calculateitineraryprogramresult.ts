import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CalculateItineraryProgramResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=airlines" })
  airlines?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=revenueBased" })
  revenueBased?: boolean;

  @Metadata({ data: "json, name=unpublished" })
  unpublished?: boolean;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
