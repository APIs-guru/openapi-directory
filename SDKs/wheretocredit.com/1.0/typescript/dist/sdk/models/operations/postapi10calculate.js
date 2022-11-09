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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var PostApi10CalculateRequest = /** @class */ (function (_super) {
    __extends(PostApi10CalculateRequest, _super);
    function PostApi10CalculateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json", elemType: shared.Itinerary }),
        __metadata("design:type", Array)
    ], PostApi10CalculateRequest.prototype, "request", void 0);
    return PostApi10CalculateRequest;
}(SpeakeasyBase));
export { PostApi10CalculateRequest };
var PostApi10CalculateResponse = /** @class */ (function (_super) {
    __extends(PostApi10CalculateResponse, _super);
    function PostApi10CalculateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ elemType: shared.CalculateResult }),
        __metadata("design:type", Array)
    ], PostApi10CalculateResponse.prototype, "calculateResults", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostApi10CalculateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostApi10CalculateResponse.prototype, "statusCode", void 0);
    return PostApi10CalculateResponse;
}(SpeakeasyBase));
export { PostApi10CalculateResponse };
