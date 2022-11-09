import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TableMetadataOptionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deferrable" })
  deferrable?: boolean;

  @Metadata({ data: "json, name=initially" })
  initially?: boolean;

  @Metadata({ data: "json, name=match" })
  match?: boolean;

  @Metadata({ data: "json, name=ondelete" })
  ondelete?: boolean;

  @Metadata({ data: "json, name=onupdate" })
  onupdate?: boolean;
}
