import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CalculateItineraryProgramResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=airlines" })
  airlines?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=revenueBased" })
  revenueBased?: boolean;

  @SpeakeasyMetadata({ data: "json, name=unpublished" })
  unpublished?: boolean;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
