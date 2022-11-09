import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Site extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=excludes" })
  excludes?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=permanent" })
  permanent?: boolean;

  @Metadata({ data: "json, name=scope" })
  scope?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: number;
}
