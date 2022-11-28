import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DistrictList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abbreviation" })
  abbreviation: string;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year: number;
}
