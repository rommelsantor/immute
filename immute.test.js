// JEST test file

const getBaseObject = () => {
  return {
    b: {
      c: {
        d: ['e', 'f', 'g'],
      },
    },
  }
}

it('allows root manipulation', () => {
  let a = getBaseObject()

  a.b = 'foo'

  expect(a).not.toEqual(getBaseObject())
})

it('allows root extension', () => {
  let a = getBaseObject()

  a.zzz = 'foo'

  expect(a.zzz).toEqual('foo')
})

it('prevents root manipulation', () => {
  let a = getBaseObject()

  immute(a)

  try {
    a.b = 'foo'
  }
  catch(e) {
    expect(a).toEqual(getBaseObject())
  }
})

it('prevents root extension', () => {
  let a = getBaseObject()

  immute(a)

  try {
    a.zzz = 'foo'
  }
  catch(e) {
    expect(a.zzz).toEqual(undefined)
  }
})

it('prevents descendant manipulation', () => {
  let a = getBaseObject()

  immute(a)

  try {
    a.b.c.d.push('foo')
  }
  catch(e) {
    expect(a).toEqual(getBaseObject())
  }
})

it('prevents descendant extension', () => {
  let a = getBaseObject()

  immute(a)

  try {
    a.b.c.zzz = 'foo'
  }
  catch(e) {
    expect(a.b.c.zzz).toEqual(undefined)
  }
})
