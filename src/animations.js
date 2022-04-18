/**
 * The benefits of variants
 * 
 * 1. Variants extracts 'initial', 'animate' och 'transition' to an object that can be referenced. Meaning the code will be cleaner and the animation may be reusable
 * 
 * 2. Propagation: 
 * If a motion component has children, changes in variant will flow down through the component hierarchy. These changes in variant will flow down until a child component defines its own animate property.
 * 
 * 
 * 3. Orchestration: 
By default, all these animations will start simultaneously. But by using variants, we gain access to extra transition props like when, delayChildren, and staggerChildren that can let parents orchestrate the execution of child animations.
 */

export const PageVariant = {
    start: {opacity: 0},
    stop: {
      opacity: 1,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
}

export const TitleVariant = {
    start: {x: '-100vw'},
    stop: {
        x: 0,
        transition: {
            type: 'spring', 
        }
    }
}

export const TextVariant = {
    start: {opacity: 0},
    stop: {
        opacity: 1,
        transition: {
            duration: 2
        }
    }
}