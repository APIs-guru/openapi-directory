var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
export var FaxV1FaxDirectionEnum;
(function (FaxV1FaxDirectionEnum) {
    FaxV1FaxDirectionEnum["Inbound"] = "inbound";
    FaxV1FaxDirectionEnum["Outbound"] = "outbound";
})(FaxV1FaxDirectionEnum || (FaxV1FaxDirectionEnum = {}));
export var FaxV1FaxQualityEnum;
(function (FaxV1FaxQualityEnum) {
    FaxV1FaxQualityEnum["Standard"] = "standard";
    FaxV1FaxQualityEnum["Fine"] = "fine";
    FaxV1FaxQualityEnum["Superfine"] = "superfine";
})(FaxV1FaxQualityEnum || (FaxV1FaxQualityEnum = {}));
export var FaxV1FaxStatusEnum;
(function (FaxV1FaxStatusEnum) {
    FaxV1FaxStatusEnum["Queued"] = "queued";
    FaxV1FaxStatusEnum["Processing"] = "processing";
    FaxV1FaxStatusEnum["Sending"] = "sending";
    FaxV1FaxStatusEnum["Delivered"] = "delivered";
    FaxV1FaxStatusEnum["Receiving"] = "receiving";
    FaxV1FaxStatusEnum["Received"] = "received";
    FaxV1FaxStatusEnum["NoAnswer"] = "no-answer";
    FaxV1FaxStatusEnum["Busy"] = "busy";
    FaxV1FaxStatusEnum["Failed"] = "failed";
    FaxV1FaxStatusEnum["Canceled"] = "canceled";
})(FaxV1FaxStatusEnum || (FaxV1FaxStatusEnum = {}));
var FaxV1Fax = /** @class */ (function (_super) {
    __extends(FaxV1Fax, _super);
    function FaxV1Fax() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], FaxV1Fax.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api_version" }),
        __metadata("design:type", String)
    ], FaxV1Fax.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], FaxV1Fax.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], FaxV1Fax.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], FaxV1Fax.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], FaxV1Fax.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], FaxV1Fax.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], FaxV1Fax.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=media_sid" }),
        __metadata("design:type", String)
    ], FaxV1Fax.prototype, "mediaSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=media_url" }),
        __metadata("design:type", String)
    ], FaxV1Fax.prototype, "mediaUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_pages" }),
        __metadata("design:type", Number)
    ], FaxV1Fax.prototype, "numPages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], FaxV1Fax.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_unit" }),
        __metadata("design:type", String)
    ], FaxV1Fax.prototype, "priceUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quality" }),
        __metadata("design:type", String)
    ], FaxV1Fax.prototype, "quality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], FaxV1Fax.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], FaxV1Fax.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], FaxV1Fax.prototype, "to", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], FaxV1Fax.prototype, "url", void 0);
    return FaxV1Fax;
}(SpeakeasyBase));
export { FaxV1Fax };
