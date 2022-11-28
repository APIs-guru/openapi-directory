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
var EventSubscriptionsResponseMeta = /** @class */ (function (_super) {
    __extends(EventSubscriptionsResponseMeta, _super);
    function EventSubscriptionsResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpStatus" }),
        __metadata("design:type", String)
    ], EventSubscriptionsResponseMeta.prototype, "httpStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], EventSubscriptionsResponseMeta.prototype, "requestId", void 0);
    return EventSubscriptionsResponseMeta;
}(SpeakeasyBase));
export { EventSubscriptionsResponseMeta };
var EventSubscriptionsResponseResultMeta = /** @class */ (function (_super) {
    __extends(EventSubscriptionsResponseResultMeta, _super);
    function EventSubscriptionsResponseResultMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpStatus" }),
        __metadata("design:type", String)
    ], EventSubscriptionsResponseResultMeta.prototype, "httpStatus", void 0);
    return EventSubscriptionsResponseResultMeta;
}(SpeakeasyBase));
export { EventSubscriptionsResponseResultMeta };
var EventSubscriptionsResponseResultResult = /** @class */ (function (_super) {
    __extends(EventSubscriptionsResponseResultResult, _super);
    function EventSubscriptionsResponseResultResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], EventSubscriptionsResponseResultResult.prototype, "id", void 0);
    return EventSubscriptionsResponseResultResult;
}(SpeakeasyBase));
export { EventSubscriptionsResponseResultResult };
var EventSubscriptionsResponseResult = /** @class */ (function (_super) {
    __extends(EventSubscriptionsResponseResult, _super);
    function EventSubscriptionsResponseResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", EventSubscriptionsResponseResultMeta)
    ], EventSubscriptionsResponseResult.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", EventSubscriptionsResponseResultResult)
    ], EventSubscriptionsResponseResult.prototype, "result", void 0);
    return EventSubscriptionsResponseResult;
}(SpeakeasyBase));
export { EventSubscriptionsResponseResult };
var EventSubscriptionsResponse = /** @class */ (function (_super) {
    __extends(EventSubscriptionsResponse, _super);
    function EventSubscriptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", EventSubscriptionsResponseMeta)
    ], EventSubscriptionsResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", EventSubscriptionsResponseResult)
    ], EventSubscriptionsResponse.prototype, "result", void 0);
    return EventSubscriptionsResponse;
}(SpeakeasyBase));
export { EventSubscriptionsResponse };
