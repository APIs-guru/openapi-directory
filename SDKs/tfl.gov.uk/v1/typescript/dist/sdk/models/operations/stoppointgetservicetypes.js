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
var StopPointGetServiceTypesQueryParams = /** @class */ (function (_super) {
    __extends(StopPointGetServiceTypesQueryParams, _super);
    function StopPointGetServiceTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], StopPointGetServiceTypesQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lineIds" }),
        __metadata("design:type", Array)
    ], StopPointGetServiceTypesQueryParams.prototype, "lineIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modes" }),
        __metadata("design:type", Array)
    ], StopPointGetServiceTypesQueryParams.prototype, "modes", void 0);
    return StopPointGetServiceTypesQueryParams;
}(SpeakeasyBase));
export { StopPointGetServiceTypesQueryParams };
var StopPointGetServiceTypesRequest = /** @class */ (function (_super) {
    __extends(StopPointGetServiceTypesRequest, _super);
    function StopPointGetServiceTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StopPointGetServiceTypesQueryParams)
    ], StopPointGetServiceTypesRequest.prototype, "queryParams", void 0);
    return StopPointGetServiceTypesRequest;
}(SpeakeasyBase));
export { StopPointGetServiceTypesRequest };
var StopPointGetServiceTypesResponse = /** @class */ (function (_super) {
    __extends(StopPointGetServiceTypesResponse, _super);
    function StopPointGetServiceTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], StopPointGetServiceTypesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StopPointGetServiceTypesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StopPointGetServiceTypesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesLineServiceType }),
        __metadata("design:type", Array)
    ], StopPointGetServiceTypesResponse.prototype, "tflApiPresentationEntitiesLineServiceTypes", void 0);
    return StopPointGetServiceTypesResponse;
}(SpeakeasyBase));
export { StopPointGetServiceTypesResponse };
