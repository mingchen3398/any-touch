import { BaseInput, eventType } from '../../interface';
export default class {
    load(event: TouchEvent): BaseInput {
        const points = Array.from(event.touches).map(({ clientX, clientY }) => ({ clientX, clientY }));
        const changedPoints = Array.from(event.changedTouches).map(({ clientX, clientY }) => ({ clientX, clientY }));
        return {
            eventType: <eventType>event.type.replace('touch', ''),
            changedPoints,
            points,
            nativeEvent: event
        };
    }
}; 