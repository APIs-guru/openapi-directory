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
var StopPointCrowdingPathParams = /** @class */ (function (_super) {
    __extends(StopPointCrowdingPathParams, _super);
    function StopPointCrowdingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], StopPointCrowdingPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=line" }),
        __metadata("design:type", String)
    ], StopPointCrowdingPathParams.prototype, "line", void 0);
    return StopPointCrowdingPathParams;
}(SpeakeasyBase));
export { StopPointCrowdingPathParams };
export var StopPointCrowdingDirectionEnum;
(function (StopPointCrowdingDirectionEnum) {
    StopPointCrowdingDirectionEnum["Inbound"] = "inbound";
    StopPointCrowdingDirectionEnum["Outbound"] = "outbound";
    StopPointCrowdingDirectionEnum["All"] = "all";
})(StopPointCrowdingDirectionEnum || (StopPointCrowdingDirectionEnum = {}));
var StopPointCrowdingQueryParams = /** @class */ (function (_super) {
    __extends(StopPointCrowdingQueryParams, _super);
    function StopPointCrowdingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], StopPointCrowdingQueryParams.prototype, "direction", void 0);
    return StopPointCrowdingQueryParams;
}(SpeakeasyBase));
export { StopPointCrowdingQueryParams };
var StopPointCrowdingRequest = /** @class */ (function (_super) {
    __extends(StopPointCrowdingRequest, _super);
    function StopPointCrowdingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StopPointCrowdingPathParams)
    ], StopPointCrowdingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StopPointCrowdingQueryParams)
    ], StopPointCrowdingRequest.prototype, "queryParams", void 0);
    return StopPointCrowdingRequest;
}(SpeakeasyBase));
export { StopPointCrowdingRequest };
var StopPointCrowdingResponse = /** @class */ (function (_super) {
    __extends(StopPointCrowdingResponse, _super);
    function StopPointCrowdingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], StopPointCrowdingResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StopPointCrowdingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StopPointCrowdingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesStopPoint }),
        __metadata("design:type", Array)
    ], StopPointCrowdingResponse.prototype, "tflApiPresentationEntitiesStopPoints", void 0);
    return StopPointCrowdingResponse;
}(SpeakeasyBase));
export { StopPointCrowdingResponse };
