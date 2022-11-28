import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TableMetadataOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deferrable" })
  deferrable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=initially" })
  initially?: boolean;

  @SpeakeasyMetadata({ data: "json, name=match" })
  match?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ondelete" })
  ondelete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=onupdate" })
  onupdate?: boolean;
}
