import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ArticleSearchDto
/** 
 * The ArticleSearchDTO Class.
 * Contains relevant fields of ArticleSearch DTO by masking actual Article entity's fields in application.
 *             
**/
export class ArticleSearchDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeStatus" })
  activeStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=applyForAllGyms" })
  applyForAllGyms?: boolean;

  @SpeakeasyMetadata({ data: "json, name=articleId" })
  articleId?: number;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdUser" })
  createdUser?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=measureUnit" })
  measureUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=modifiedUser" })
  modifiedUser?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=sellingPrice" })
  sellingPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
