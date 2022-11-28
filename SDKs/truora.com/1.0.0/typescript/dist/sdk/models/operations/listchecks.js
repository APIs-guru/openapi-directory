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
var ListChecksQueryParams = /** @class */ (function (_super) {
    __extends(ListChecksQueryParams, _super);
    function ListChecksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_id" }),
        __metadata("design:type", String)
    ], ListChecksQueryParams.prototype, "reportId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_key" }),
        __metadata("design:type", String)
    ], ListChecksQueryParams.prototype, "startKey", void 0);
    return ListChecksQueryParams;
}(SpeakeasyBase));
export { ListChecksQueryParams };
var ListChecksSecurity = /** @class */ (function (_super) {
    __extends(ListChecksSecurity, _super);
    function ListChecksSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ListChecksSecurity.prototype, "apiKey", void 0);
    return ListChecksSecurity;
}(SpeakeasyBase));
export { ListChecksSecurity };
var ListChecksRequest = /** @class */ (function (_super) {
    __extends(ListChecksRequest, _super);
    function ListChecksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListChecksQueryParams)
    ], ListChecksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListChecksSecurity)
    ], ListChecksRequest.prototype, "security", void 0);
    return ListChecksRequest;
}(SpeakeasyBase));
export { ListChecksRequest };
var ListChecksResponse = /** @class */ (function (_super) {
    __extends(ListChecksResponse, _super);
    function ListChecksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChecksOutput)
    ], ListChecksResponse.prototype, "checksOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListChecksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListChecksResponse.prototype, "statusCode", void 0);
    return ListChecksResponse;
}(SpeakeasyBase));
export { ListChecksResponse };
