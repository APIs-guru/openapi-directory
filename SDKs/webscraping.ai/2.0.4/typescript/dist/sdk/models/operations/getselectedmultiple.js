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
var GetSelectedMultipleQueryParams = /** @class */ (function (_super) {
    __extends(GetSelectedMultipleQueryParams, _super);
    function GetSelectedMultipleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=headers" }),
        __metadata("design:type", Map)
    ], GetSelectedMultipleQueryParams.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=js" }),
        __metadata("design:type", Boolean)
    ], GetSelectedMultipleQueryParams.prototype, "js", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy" }),
        __metadata("design:type", String)
    ], GetSelectedMultipleQueryParams.prototype, "proxy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=selectors" }),
        __metadata("design:type", Array)
    ], GetSelectedMultipleQueryParams.prototype, "selectors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], GetSelectedMultipleQueryParams.prototype, "timeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" }),
        __metadata("design:type", String)
    ], GetSelectedMultipleQueryParams.prototype, "url", void 0);
    return GetSelectedMultipleQueryParams;
}(SpeakeasyBase));
export { GetSelectedMultipleQueryParams };
var GetSelectedMultipleRequest = /** @class */ (function (_super) {
    __extends(GetSelectedMultipleRequest, _super);
    function GetSelectedMultipleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSelectedMultipleQueryParams)
    ], GetSelectedMultipleRequest.prototype, "queryParams", void 0);
    return GetSelectedMultipleRequest;
}(SpeakeasyBase));
export { GetSelectedMultipleRequest };
var GetSelectedMultipleResponse = /** @class */ (function (_super) {
    __extends(GetSelectedMultipleResponse, _super);
    function GetSelectedMultipleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSelectedMultipleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetSelectedMultipleResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PageError)
    ], GetSelectedMultipleResponse.prototype, "pageError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], GetSelectedMultipleResponse.prototype, "selectedAreas", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSelectedMultipleResponse.prototype, "statusCode", void 0);
    return GetSelectedMultipleResponse;
}(SpeakeasyBase));
export { GetSelectedMultipleResponse };
