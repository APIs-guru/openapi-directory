import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CatalogV1Id } from "./catalogv1id";
import { CatalogCategory } from "./catalogcategory";
import { CatalogCustomAttributeDefinition } from "./catalogcustomattributedefinition";
import { CatalogCustomAttributeValue } from "./catalogcustomattributevalue";
import { CatalogDiscount } from "./catalogdiscount";
import { CatalogImage } from "./catalogimage";
import { CatalogItem } from "./catalogitem";
import { CatalogItemOption } from "./catalogitemoption";
import { CatalogItemOptionValue } from "./catalogitemoptionvalue";
import { CatalogItemVariation } from "./catalogitemvariation";
import { CatalogMeasurementUnit } from "./catalogmeasurementunit";
import { CatalogModifier } from "./catalogmodifier";
import { CatalogModifierList } from "./catalogmodifierlist";
import { CatalogPricingRule } from "./catalogpricingrule";
import { CatalogProductSet } from "./catalogproductset";
import { CatalogQuickAmountsSettings } from "./catalogquickamountssettings";
import { CatalogSubscriptionPlan } from "./catalogsubscriptionplan";
import { CatalogTax } from "./catalogtax";
import { CatalogTimePeriod } from "./catalogtimeperiod";


// CatalogObject
/** 
 * The wrapper object for the Catalog entries of a given object type.
 * 
 * The type of a particular `CatalogObject` is determined by the value of the
 * `type` attribute and only the corresponding data attribute can be set on the `CatalogObject` instance.
 * For example, the following list shows some instances of `CatalogObject` of a given `type` and
 * their corresponding data attribute that can be set:
 * - For a `CatalogObject` of the `ITEM` type, set the `item_data` attribute to yield the `CatalogItem` object.
 * - For a `CatalogObject` of the `ITEM_VARIATION` type, set the `item_variation_data` attribute to yield the `CatalogItemVariation` object.
 * - For a `CatalogObject` of the `MODIFIER` type, set the `modifier_data` attribute to yield the `CatalogModifier` object.
 * - For a `CatalogObject` of the `MODIFIER_LIST` type, set the `modifier_list_data` attribute to yield the `CatalogModifierList` object.
 * - For a `CatalogObject` of the `CATEGORY` type, set the `category_data` attribute to yield the `CatalogCategory` object.
 * - For a `CatalogObject` of the `DISCOUNT` type, set the `discount_data` attribute to yield the `CatalogDiscount` object.
 * - For a `CatalogObject` of the `TAX` type, set the `tax_data` attribute to yield the `CatalogTax` object.
 * - For a `CatalogObject` of the `IMAGE` type, set the `image_data` attribute to yield the `CatalogImageData`  object.
 * - For a `CatalogObject` of the `QUICK_AMOUNTS_SETTINGS` type, set the `quick_amounts_settings_data` attribute to yield the `CatalogQuickAmountsSettings` object.
 * - For a `CatalogObject` of the `PRICING_RULE` type, set the `pricing_rule_data` attribute to yield the `CatalogPricingRule` object.
 * - For a `CatalogObject` of the `TIME_PERIOD` type, set the `time_period_data` attribute to yield the `CatalogTimePeriod` object.
 * - For a `CatalogObject` of the `PRODUCT_SET` type, set the `product_set_data` attribute to yield the `CatalogProductSet`  object.
 * - For a `CatalogObject` of the `SUBSCRIPTION_PLAN` type, set the `subscription_plan_data` attribute to yield the `CatalogSubscriptionPlan` object.
 * 
 * 
 * For a more detailed discussion of the Catalog data model, please see the
 * [Design a Catalog](https://developer.squareup.com/docs/catalog-api/design-a-catalog) guide.
**/
export class CatalogObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=absent_at_location_ids" })
  absentAtLocationIds?: string[];

  @Metadata({ data: "json, name=catalog_v1_ids", elemType: shared.CatalogV1Id })
  catalogV1Ids?: CatalogV1Id[];

  @Metadata({ data: "json, name=category_data" })
  categoryData?: CatalogCategory;

  @Metadata({ data: "json, name=custom_attribute_definition_data" })
  customAttributeDefinitionData?: CatalogCustomAttributeDefinition;

  @Metadata({ data: "json, name=custom_attribute_values", elemType: shared.CatalogCustomAttributeValue })
  customAttributeValues?: Map<string, CatalogCustomAttributeValue>;

  @Metadata({ data: "json, name=discount_data" })
  discountData?: CatalogDiscount;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=image_data" })
  imageData?: CatalogImage;

  @Metadata({ data: "json, name=image_id" })
  imageId?: string;

  @Metadata({ data: "json, name=is_deleted" })
  isDeleted?: boolean;

  @Metadata({ data: "json, name=item_data" })
  itemData?: CatalogItem;

  @Metadata({ data: "json, name=item_option_data" })
  itemOptionData?: CatalogItemOption;

  @Metadata({ data: "json, name=item_option_value_data" })
  itemOptionValueData?: CatalogItemOptionValue;

  @Metadata({ data: "json, name=item_variation_data" })
  itemVariationData?: CatalogItemVariation;

  @Metadata({ data: "json, name=measurement_unit_data" })
  measurementUnitData?: CatalogMeasurementUnit;

  @Metadata({ data: "json, name=modifier_data" })
  modifierData?: CatalogModifier;

  @Metadata({ data: "json, name=modifier_list_data" })
  modifierListData?: CatalogModifierList;

  @Metadata({ data: "json, name=present_at_all_locations" })
  presentAtAllLocations?: boolean;

  @Metadata({ data: "json, name=present_at_location_ids" })
  presentAtLocationIds?: string[];

  @Metadata({ data: "json, name=pricing_rule_data" })
  pricingRuleData?: CatalogPricingRule;

  @Metadata({ data: "json, name=product_set_data" })
  productSetData?: CatalogProductSet;

  @Metadata({ data: "json, name=quick_amounts_settings_data" })
  quickAmountsSettingsData?: CatalogQuickAmountsSettings;

  @Metadata({ data: "json, name=subscription_plan_data" })
  subscriptionPlanData?: CatalogSubscriptionPlan;

  @Metadata({ data: "json, name=tax_data" })
  taxData?: CatalogTax;

  @Metadata({ data: "json, name=time_period_data" })
  timePeriodData?: CatalogTimePeriod;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
