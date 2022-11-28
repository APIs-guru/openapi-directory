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
import * as shared from "../shared";
var GetAttributesComputedQueryParams = /** @class */ (function (_super) {
    __extends(GetAttributesComputedQueryParams, _super);
    function GetAttributesComputedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all" }),
        __metadata("design:type", Boolean)
    ], GetAttributesComputedQueryParams.prototype, "all", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceId" }),
        __metadata("design:type", Number)
    ], GetAttributesComputedQueryParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupId" }),
        __metadata("design:type", Number)
    ], GetAttributesComputedQueryParams.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=refresh" }),
        __metadata("design:type", Boolean)
    ], GetAttributesComputedQueryParams.prototype, "refresh", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", Number)
    ], GetAttributesComputedQueryParams.prototype, "userId", void 0);
    return GetAttributesComputedQueryParams;
}(SpeakeasyBase));
export { GetAttributesComputedQueryParams };
var GetAttributesComputedRequest = /** @class */ (function (_super) {
    __extends(GetAttributesComputedRequest, _super);
    function GetAttributesComputedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAttributesComputedQueryParams)
    ], GetAttributesComputedRequest.prototype, "queryParams", void 0);
    return GetAttributesComputedRequest;
}(SpeakeasyBase));
export { GetAttributesComputedRequest };
var GetAttributesComputedResponse = /** @class */ (function (_super) {
    __extends(GetAttributesComputedResponse, _super);
    function GetAttributesComputedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Attribute }),
        __metadata("design:type", Array)
    ], GetAttributesComputedResponse.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAttributesComputedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAttributesComputedResponse.prototype, "statusCode", void 0);
    return GetAttributesComputedResponse;
}(SpeakeasyBase));
export { GetAttributesComputedResponse };
