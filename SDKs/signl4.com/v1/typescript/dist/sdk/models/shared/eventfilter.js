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
import { PagedResultsPublicContinuationToken } from "./pagedresultspubliccontinuationtoken";
var EventFilter = /** @class */ (function (_super) {
    __extends(EventFilter, _super);
    function EventFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=continuationToken" }),
        __metadata("design:type", PagedResultsPublicContinuationToken)
    ], EventFilter.prototype, "continuationToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventStatusCode" }),
        __metadata("design:type", Number)
    ], EventFilter.prototype, "eventStatusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxCreationDate" }),
        __metadata("design:type", Date)
    ], EventFilter.prototype, "maxCreationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minCreationDate" }),
        __metadata("design:type", Date)
    ], EventFilter.prototype, "minCreationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modifiedSince" }),
        __metadata("design:type", Date)
    ], EventFilter.prototype, "modifiedSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teamId" }),
        __metadata("design:type", String)
    ], EventFilter.prototype, "teamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textToSearch" }),
        __metadata("design:type", String)
    ], EventFilter.prototype, "textToSearch", void 0);
    return EventFilter;
}(SpeakeasyBase));
export { EventFilter };
