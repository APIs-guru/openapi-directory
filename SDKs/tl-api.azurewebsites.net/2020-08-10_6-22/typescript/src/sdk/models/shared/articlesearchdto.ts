import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ArticleSearchDto
/** 
 * The ArticleSearchDTO Class.
 * Contains relevant fields of ArticleSearch DTO by masking actual Article entity's fields in application.
 *             
**/
export class ArticleSearchDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeStatus" })
  activeStatus?: boolean;

  @Metadata({ data: "json, name=applyForAllGyms" })
  applyForAllGyms?: boolean;

  @Metadata({ data: "json, name=articleId" })
  articleId?: number;

  @Metadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=createdUser" })
  createdUser?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=measureUnit" })
  measureUnit?: string;

  @Metadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @Metadata({ data: "json, name=modifiedUser" })
  modifiedUser?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=number" })
  number?: number;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=sellingPrice" })
  sellingPrice?: number;

  @Metadata({ data: "json, name=tags" })
  tags?: string;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
