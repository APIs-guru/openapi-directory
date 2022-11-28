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
var ValuesInPastMultipleGetPathParams = /** @class */ (function (_super) {
    __extends(ValuesInPastMultipleGetPathParams, _super);
    function ValuesInPastMultipleGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ValuesInPastMultipleGetPathParams.prototype, "id", void 0);
    return ValuesInPastMultipleGetPathParams;
}(SpeakeasyBase));
export { ValuesInPastMultipleGetPathParams };
var ValuesInPastMultipleGetQueryParams = /** @class */ (function (_super) {
    __extends(ValuesInPastMultipleGetQueryParams, _super);
    function ValuesInPastMultipleGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", Date)
    ], ValuesInPastMultipleGetQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval" }),
        __metadata("design:type", Number)
    ], ValuesInPastMultipleGetQueryParams.prototype, "interval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", Date)
    ], ValuesInPastMultipleGetQueryParams.prototype, "startDate", void 0);
    return ValuesInPastMultipleGetQueryParams;
}(SpeakeasyBase));
export { ValuesInPastMultipleGetQueryParams };
var ValuesInPastMultipleGetRequest = /** @class */ (function (_super) {
    __extends(ValuesInPastMultipleGetRequest, _super);
    function ValuesInPastMultipleGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ValuesInPastMultipleGetPathParams)
    ], ValuesInPastMultipleGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ValuesInPastMultipleGetQueryParams)
    ], ValuesInPastMultipleGetRequest.prototype, "queryParams", void 0);
    return ValuesInPastMultipleGetRequest;
}(SpeakeasyBase));
export { ValuesInPastMultipleGetRequest };
var ValuesInPastMultipleGetResponse = /** @class */ (function (_super) {
    __extends(ValuesInPastMultipleGetResponse, _super);
    function ValuesInPastMultipleGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ValuesInPastMultipleGetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ValuesInPastMultipleGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ValuesInPastMultipleGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ValuesData }),
        __metadata("design:type", Array)
    ], ValuesInPastMultipleGetResponse.prototype, "valuesData", void 0);
    return ValuesInPastMultipleGetResponse;
}(SpeakeasyBase));
export { ValuesInPastMultipleGetResponse };
