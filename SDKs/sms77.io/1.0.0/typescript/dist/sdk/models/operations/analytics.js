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
export var AnalyticsGroupByEnum;
(function (AnalyticsGroupByEnum) {
    AnalyticsGroupByEnum["Date"] = "date";
    AnalyticsGroupByEnum["Label"] = "label";
    AnalyticsGroupByEnum["Subaccount"] = "subaccount";
    AnalyticsGroupByEnum["Country"] = "country";
})(AnalyticsGroupByEnum || (AnalyticsGroupByEnum = {}));
var AnalyticsQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsQueryParams, _super);
    function AnalyticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", String)
    ], AnalyticsQueryParams.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_by" }),
        __metadata("design:type", String)
    ], AnalyticsQueryParams.prototype, "groupBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label" }),
        __metadata("design:type", String)
    ], AnalyticsQueryParams.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", String)
    ], AnalyticsQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subaccounts" }),
        __metadata("design:type", String)
    ], AnalyticsQueryParams.prototype, "subaccounts", void 0);
    return AnalyticsQueryParams;
}(SpeakeasyBase));
export { AnalyticsQueryParams };
var Analytics200ApplicationJson = /** @class */ (function (_super) {
    __extends(Analytics200ApplicationJson, _super);
    function Analytics200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], Analytics200ApplicationJson.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=direct" }),
        __metadata("design:type", Number)
    ], Analytics200ApplicationJson.prototype, "direct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=economy" }),
        __metadata("design:type", Number)
    ], Analytics200ApplicationJson.prototype, "economy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hlr" }),
        __metadata("design:type", Number)
    ], Analytics200ApplicationJson.prototype, "hlr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inbound" }),
        __metadata("design:type", Number)
    ], Analytics200ApplicationJson.prototype, "inbound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mnp" }),
        __metadata("design:type", Number)
    ], Analytics200ApplicationJson.prototype, "mnp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usage_eur" }),
        __metadata("design:type", Number)
    ], Analytics200ApplicationJson.prototype, "usageEur", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice" }),
        __metadata("design:type", Number)
    ], Analytics200ApplicationJson.prototype, "voice", void 0);
    return Analytics200ApplicationJson;
}(SpeakeasyBase));
export { Analytics200ApplicationJson };
var AnalyticsRequest = /** @class */ (function (_super) {
    __extends(AnalyticsRequest, _super);
    function AnalyticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsQueryParams)
    ], AnalyticsRequest.prototype, "queryParams", void 0);
    return AnalyticsRequest;
}(SpeakeasyBase));
export { AnalyticsRequest };
var AnalyticsResponse = /** @class */ (function (_super) {
    __extends(AnalyticsResponse, _super);
    function AnalyticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Analytics200ApplicationJson)
    ], AnalyticsResponse.prototype, "analytics200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsResponse.prototype, "statusCode", void 0);
    return AnalyticsResponse;
}(SpeakeasyBase));
export { AnalyticsResponse };
